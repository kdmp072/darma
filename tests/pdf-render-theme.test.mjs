import assert from 'node:assert/strict';
import test from 'node:test';
import { SPPG_PDF_THEME } from '../public/js/features/exports/pdf-theme.js';

globalThis.window = globalThis;
await import('../public/js/features/exports/data.js');
await import('../public/js/features/exports/forms.js');

function mockDocument() {
  const calls = [];
  return {
    calls,
    internal: { pageSize: { getWidth: () => 210, getHeight: () => 297 } },
    setFillColor: (...args) => calls.push(['fill', args]),
    setTextColor: (...args) => calls.push(['text', args]),
    setFontSize: (...args) => calls.push(['fontSize', args]),
    setFont: (...args) => calls.push(['font', args]),
    rect: (...args) => calls.push(['rect', args]),
    roundedRect: (...args) => calls.push(['roundedRect', args]),
    text: (...args) => calls.push(['drawText', args]),
    addPage: () => calls.push(['addPage'])
  };
}

test('SPPG top header is rendered blue with yellow text', () => {
  const doc = mockDocument();
  globalThis.pdfHead(doc, 'FORM SPPG', 'Tujuan', SPPG_PDF_THEME);
  assert.deepEqual(doc.calls.find(call => call[0] === 'fill'), ['fill', [11, 31, 58]]);
  assert.deepEqual(doc.calls.find(call => call[0] === 'text'), ['text', [253, 230, 138]]);
  assert.equal(doc.__darmaPdfTheme, SPPG_PDF_THEME);
});

test('SPPG section title uses a blue strip and yellow text', () => {
  const doc = mockDocument();
  doc.__darmaPdfTheme = SPPG_PDF_THEME;
  globalThis.formTitle(doc, 'BAGIAN 1', 30, 297);
  assert.deepEqual(doc.calls.find(call => call[0] === 'fill'), ['fill', [11, 31, 58]]);
  assert.deepEqual(doc.calls.find(call => call[0] === 'text'), ['text', [253, 230, 138]]);
  assert.equal(doc.calls.some(call => call[0] === 'roundedRect'), true);
});
