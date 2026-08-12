export const SPPG_PDF_THEME = Object.freeze({
  headerBackground: Object.freeze([11, 31, 58]),
  headerText: Object.freeze([253, 230, 138]),
  sectionBackground: Object.freeze([11, 31, 58]),
  sectionText: Object.freeze([253, 230, 138]),
  labelBackground: Object.freeze([239, 246, 255]),
  tableHead: Object.freeze({
    fillColor: Object.freeze([21, 52, 91]),
    textColor: Object.freeze([253, 230, 138]),
    fontSize: 7.5,
    fontStyle: 'bold'
  })
});

export function themeForFormType(formType) {
  return formType === 'SPPG' ? SPPG_PDF_THEME : null;
}
