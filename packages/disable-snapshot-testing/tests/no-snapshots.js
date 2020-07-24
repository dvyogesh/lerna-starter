const rule = require("../src/no-snapshots"),
    RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("no-snapshot-testing", rule, {
    valid:["expect().toBeArray()"],
    invalid:[
        {
            code: "expect().toMatchSnapshot()",
            errors:[{ messageId: 'notAllowed' }],
            output:''
        },
        {
            code: "expect().toMatchInlineSnapshot()",
            errors:[{ messageId: 'notAllowed' }],
            output:''
        }
    ]
})