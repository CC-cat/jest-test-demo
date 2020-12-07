// 测试用例
// test('测试10与10相匹配', () => {
//     expect(10).toBe(10);
//     // toBe 匹配器 matchers. object.is ===
//     const a = { one: 1 }
//     expect(a).toBe({ one: 1 });
// })

test('测试对象内容相等', () => {
    // toEqual 匹配器
    expect(10).toEqual(101);
})

test('测试对象内容相等', () => {
    // toEqual 匹配器
    const a = { one: 1 }
    expect(a).toEqual({ one: 1 });
})

test('测试null相等', () => {
    // toBeNull 匹配器
    const a = null
    expect(a).toBeNull();
})

test('测试undefined相等', () => {
    // toBeUndefined 匹配器
    const a = undefined
    expect(a).toBeUndefined();
})


test('测试定义过的内容', () => {
    // toBeDefined 匹配器
    const a = 1
    expect(a).toBeDefined();
})

// 测试真假匹配器
test('测试定义过的内容', () => {
    // toBeTruthy 匹配器
    const a = 1
    expect(a).toBeTruthy();
})

// 测试真假匹配器
test('测试toBeFalsy匹配器', () => {
    // toBeFalsy 匹配器
    const a = undefined
    expect(a).toBeFalsy();
})

test('测试not匹配器', () => {
    // not 匹配器
    const a = 1
    expect(a).not.toBeFalsy();
    // expect(a).toBeTruthy(); // 等价
})


/* 数字相关的匹配器 ----------------------- */

// 比预定结果数值大可通过
test('toBeGreaterThan', () => {
    const count = 10
    expect(count).toBeGreaterThan(9);
    // 10 比 9 大 能通过 , 等于、小于都不行
})

// 比预定结果数值小可通过
test('toBeLessThan', () => {
    const count = 10
    expect(count).toBeLessThan(11);
    // 10 比 11 小 能通过 , 等于、大于都不行
})

// 比预定结果数值 大于 || 等于预定值 可通过
test('toBeGreaterThanOrEqual', () => {
    const count = 11
    expect(count).toBeGreaterThanOrEqual(10);
    // count 大于、等于预定值可通过
})

// 计算浮点数 toBeCloseTo
test('toBeCloseTo', () => {
    const firstNumber = 0.1
    const secondNumber = 0.2
    expect(firstNumber + secondNumber).toBeCloseTo(0.3);
})



/* 字符串相关的匹配器 ----------------------- */

// 字符串包含项匹配
// test('toMatch', () => {
//     const str = 'http://www.dell-lee.com'
//     // expect(str).toMatch(/dell/);
//     expect(str).toMatch("dell");
// })

/* 数组相关的匹配器 ----------------------- */

// Array
// test('toContain', () => {
//     const arr = ['dell', 'lee', 'imooc']
//     expect(arr).toContain(dell);
// })

// set
// test('toContain', () => {
//     const arr = ['dell', 'lee', 'imooc']
//     const data = new Set(arr)
//     expect(data).toContain('dell');
// })



/* 异常相关的匹配器 ----------------------- */

const throwNewErrorFunc = () => {
    throw new Error('this is a new error');
}
test('toThrow', () => {
    // expect(throwNewwErrorFunc).toThrow();

    expect(throwNewErrorFunc).toThrow('this is a old error');
    // toThrow 里写入匹配抛出异常的字符串, 否则不通过
})
