# Tension Bowl Bot

This is a [Discord](https://discordapp.com/) bot to simulate a
virtual tension bowl based on the Angry GM's [Tension Pool](https://theangrygm.com/making-things-complicated/).

## Usage

The available options are:
- /tensionadd to add a die in the bowl.
- /tensionaddandroll to add a die and immediately roll.
- /tensionroll to roll all the dice in the bowl and empty it.
- /tensioncheck to check the number of dice in the bowl.
- /tensionempty to empty the bowl.
- /tensionhelp to see this help text.

## Development

Feel free to clone or fork this repo and adapt it to whatever your needs are.

This application uses the `dotenv` npm package, this means that a `.env` file needs to be added with the format below:

```
TOKEN=your-discord-bot-token
```

## License

This application is licensed under the MIT license.

Copyright © 2020 LuckySevenCorp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

This software has been adapted from [SitePoint GitHub](https://github.com/sitepoint-editors/discord-bot-sitepoint).