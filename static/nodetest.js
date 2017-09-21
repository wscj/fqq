const fs = require('fs');

const file = fs.readFileSync('./test.vue', 'utf-8');

function replace(file) {
	if (file.indexOf('rem') > -1) {
		let i = index = file.indexOf('rem');
		file = file.replace('rem', '');
		while (1) {
			if (i === 0) {
				console.error('css代码有错误');
				return;
			}
			if (file.substr(--i, 1) === ' ') {
				break;
			}
		}
		let num = Number(file.substring(i, index));
		num = num * 150;
		file = file.substring(0, i) + 'px2rem(' + num + 'px)' + file.substr(index);
		return replace(file);
	}
	return file;		
};

const str = replace(file);
console.log(str);