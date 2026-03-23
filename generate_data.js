import { readFileSync, writeFileSync } from 'fs';

const rawData = JSON.parse(readFileSync('./extracted_plan.json', 'utf8'));
const sheet = rawData["Resumen Calistenia"];

const program = {};

sheet.slice(1).forEach(row => {
    const [dayNum, dayTitle, type, exNum, exName, procedure, volume, video] = row;
    
    if (!program[dayNum]) {
        program[dayNum] = {
            id: `day-${dayNum}`,
            dayNum: parseInt(dayNum),
            title: dayTitle,
            type: type,
            description: '',
            exercises: []
        };
    }
    
    if (exNum === 0) {
        program[dayNum].description = procedure; // "Aumentar la fuerza base..."
    } else {
        program[dayNum].exercises.push({
            id: `${dayNum}-${exNum}`,
            name: exName,
            sets: volume,
            procedure: procedure,
            video: video !== '---' ? video : null
        });
    }
});

const output = `export const PROGRAM_DATA = ${JSON.stringify(Object.values(program), null, 2)};`;

writeFileSync('./src/data.js', output);
console.log('SUCCESS: src/data.js updated with day descriptions.');
