import assert from 'node:assert/strict';
import test from 'node:test';
import { SPPG_PDF_THEME, themeForFormType } from '../public/js/features/exports/pdf-theme.js';

test('SPPG PDF uses navy blue backgrounds and yellow text', () => {
  assert.deepEqual([...SPPG_PDF_THEME.headerBackground], [11, 31, 58]);
  assert.deepEqual([...SPPG_PDF_THEME.headerText], [253, 230, 138]);
  assert.deepEqual([...SPPG_PDF_THEME.tableHead.fillColor], [21, 52, 91]);
  assert.deepEqual([...SPPG_PDF_THEME.tableHead.textColor], [253, 230, 138]);
});

test('SPPG theme is isolated from Naker and KDMP', () => {
  assert.equal(themeForFormType('SPPG'), SPPG_PDF_THEME);
  assert.equal(themeForFormType('NAKER'), null);
  assert.equal(themeForFormType('KDMP'), null);
});
