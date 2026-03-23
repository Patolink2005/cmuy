import XLSX from 'xlsx';
import { readFileSync, writeFileSync } from 'fs';

try {
  const filePath = './Calistenia Militar - Tu Plan Hombre_Resumen.xlsx';
  const buf = readFileSync(filePath);
  const workbook = XLSX.read(buf, {type:'buffer'});

  const result = {};
  workbook.SheetNames.forEach(sheetName => {
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
    result[sheetName] = data;
  });

  writeFileSync('./extracted_plan.json', JSON.stringify(result, null, 2));
  console.log('SUCCESS: data extracted to extracted_plan.json');
} catch (e) {
  console.error('ERROR reading excel:', e.message);
}
