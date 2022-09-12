const fs = require("fs");
const handlebars = require("handlebars");

handlebars.registerHelper("generateBadgeURL", function () {
  let url = `https://img.shields.io/badge/-${this.label}-${this.color}`;

  url += `?logo=${this.logo}`;
  url += "&style=flat";
  url += "&logoWidth=30";
  url += "&logoColor=white";

  return url;
});

const template = handlebars.compile(`
# Hello 👋

My name is Kevin Lee and I'm a software engineer from Los Angeles, California.

{{#each info}}
- {{{emoji}}} {{{description}}}.
{{/each}}

<div>
  <h3 align="left">Connect with me:</h3>
  <p align="left">
    {{#each socialBadges}}
    <a href="{{link}}">
      <img alt="{{{label}}}" src="{{{generateBadgeURL}}}" />
    </a>
    {{/each}}
  </p>
</div>
`);

const context = {
  info: [
    {
      emoji: "💼",
      description:
        "I'm currently working at **[Liferay](https://liferay.com)**",
    },
    {
      emoji: "🔭",
      description: "I'm currently working on a **linter**",
    },
    {
      emoji: "🌱",
      description:
        "I'm currently learning **[Rust 🦀](https://rust-lang.org)**",
    },
  ],
  socialBadges: [
    {
      label: "LinkedIn",
      color: "0a66c2",
      logo: "linkedin",
      link: "https://linkedin.com/in/kevin-hwa-lee",
    },
    {
      label: "Stack Overflow",
      color: "f58025",
      logo: "stackoverflow",
      link: "https://stackoverflow.com/users/6752025/kevin-lee",
    },
    {
      label: "LeetCode",
      color: "ffa116",
      logo: "leetcode",
      link: "https://leetcode.com/kevhlee",
    },
    {
      label: "Codewars",
      color: "b1361e",
      logo: "codewars",
      link: "https://codewars.com/users/kevhlee",
    },
  ],
};

fs.writeFile("README.md", template(context), () => {
  console.log("README successfully generated!");
});
