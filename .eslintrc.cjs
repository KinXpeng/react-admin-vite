module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  node: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-cond-assign': 2,
    'no-console': [
      'error',
      {
        allow: ['log', 'warn', 'error', 'info'],
      },
    ],
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止重复的 case 标签
    'no-duplicate-case': 2,
    // 禁止空语句块
    'no-empty': 2,
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 2,
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要的括号 //(a * b) + c;//报错
    'no-extra-parens': 0,

    // 强制所有控制语句使用一致的括号风格
    curly: [2, 'all'],
    // 禁止 catch 子句的参数与外层作用域中的变量同名
    'no-catch-shadow': 0,
    // 不允许标签与变量同名
    'no-label-var': 2,
    // 禁止 var 声明 与外层作用域的变量同名
    'no-shadow': 0,
    // 禁止覆盖受限制的标识符
    'no-shadow-restricted-names': 2,
    // 不允许在变量定义之前使用它们
    'no-use-before-define': 0,
    //
    // 风格指南 //
    //
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
    // 禁止或强制在单行代码块中使用空格(禁用)
    'block-spacing': [1, 'never'],
    // 强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
    // if while function 后面的{必须与if在同一行，java风格。
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    indent: ['error', 2],
    // 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': 2,
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    // 要求在注释周围有空行 ( 要求在块级注释之前有一空行)
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
      },
    ],
    'func-style': 0,

    // 强制使用一致的反勾号、双引号或单引号
    quotes: [2, 'single', 'avoid-escape'],

    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    semi: [2, 'always'],

    // 禁止未使用的变量
    'no-unused-vars': 0,
  },
  extends: ['prettier'],
};
