#!/usr/bin/env python3
"""Render the website CV as a PDF from the same YAML used by Jekyll.

The website supports JSONResume-style keys in its RenderCV layout. Normalize
those display keys for the RenderCV CLI without maintaining a second CV.
Run after installing requirements.txt: python bin/render_cv.py
"""
from copy import deepcopy
from pathlib import Path
import subprocess
import tempfile

import yaml

ROOT = Path(__file__).resolve().parents[1]


def normalize_cv(source):
    cv = deepcopy(source['cv'])
    cv.pop('label', None)
    summary = cv.pop('summary', None)
    sections = {}
    if summary:
        sections['Research Profile'] = [summary]
    for title, entries in cv['sections'].items():
        target_title = {'Experience': 'Research Experience', 'Volunteer': 'Leadership and Service'}.get(title, title)
        normalized = []
        for original in entries:
            entry = deepcopy(original)
            if title == 'Education':
                entry['degree'] = entry.pop('studyType')
            elif title in ('Publications', 'Manuscripts and Thesis', 'Patents', 'Awards', 'Projects'):
                entry['name'] = entry.pop('title', None) or entry.pop('name', None)
                date = entry.pop('releaseDate', entry.get('date'))
                if date is not None:
                    # A bare year must not become a fabricated January date.
                    if len(str(date)) == 4:
                        entry.pop('date', None)
                        entry['year_only'] = str(date)
                    else:
                        entry['date'] = str(date)
                publisher = entry.pop('publisher', None)
                url = entry.pop('url', None)
                if url:
                    entry['name'] = f"[{entry['name']}]({url})"
                if publisher:
                    entry['summary'] = f"{publisher}. {entry.get('summary', '')}".strip()
            elif title in ('Skills', 'Languages'):
                entry = {'label': entry['name'], 'details': entry.get('keywords') or entry.get('summary', '')}
            if entry.get('end_date') == 'Present':
                entry['end_date'] = 'present'
            normalized.append(entry)
        sections[target_title] = normalized
    cv['sections'] = sections
    return {'cv': cv}


def main():
    source = yaml.safe_load((ROOT / '_data/cv.yaml').read_text())
    with tempfile.TemporaryDirectory(prefix='website-rendercv-') as temp:
        input_path = Path(temp) / 'cv.yaml'
        input_path.write_text(yaml.safe_dump(normalize_cv(source), sort_keys=False, allow_unicode=True))
        subprocess.run([
            'rendercv', 'render', str(input_path),
            '--design', str(ROOT / 'assets/rendercv/design.yaml'),
            '--locale-catalog', str(ROOT / 'assets/rendercv/locale.yaml'),
            '--pdf-path', str(ROOT / 'assets/pdf/cv.pdf'),
            '--dont-generate-markdown', '--dont-generate-html', '--dont-generate-png',
        ], check=True, cwd=temp)


if __name__ == '__main__':
    main()
