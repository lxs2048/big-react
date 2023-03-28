import path from 'path';
import fs from 'fs';

import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

// 所有包的路径
const pkgPath = path.resolve(__dirname, '../../packages');
// 打包产物路径，可能会打包出很多类型的包，应该放到node_modules
const distPath = path.resolve(__dirname, '../../dist/node_modules');

// 解析包路径
export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		// 产物路径
		return `${distPath}/${pkgName}`;
	}
	return `${pkgPath}/${pkgName}`;
}

// 获取包的package.json文件内容
export function getPackageJSON(pkgName) {
	const path = `${resolvePkgPath(pkgName)}/package.json`;
	const str = fs.readFileSync(path, { encoding: 'utf-8' });
	return JSON.parse(str);
}
// 获取所有的Rollup公用的plugins
export function getBaseRollupPlugins({ typescript = {} } = {}) {
	// [commonjs plugin(),typescript plugin(ts配置)]
	return [cjs(), ts(typescript)];
}
