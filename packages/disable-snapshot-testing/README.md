
## **Installation**
Run `npm i disable-snapshot-testing --save-dev`

or

Run `yarn add disable-snapshot-testing`

## **Usage**
Add `disable-snapshot-testing` to your `.eslintrc` file.

```
{
    "plugins": "no-snapshot-testing"
}
```
and

```
{
    "rules": {"disable-snapshot-testing/disable-snapshot-testing": "error"}
}
```
from now on all `toMatchSnapshot` and `toMatchInlineSnapshot` calls will be disallowed and removed with fix run.

![](https://media.giphy.com/media/3oEduY2IBr0s8AdrIk/giphy.gif)
