// External
import chalk from 'chalk';
import fs from 'node:fs';

import fontawesome from '@fortawesome/fontawesome-svg-core';
import {
  faAt, faComments, faKeyboard, faLink, faUsers
} from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord, faDiscourse, faFacebook, faGithub, faGitlab, faLinkedin,
  faMeetup, faReddit, faSlack, faTelegram, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';

buildAll();

function buildAll() {
  const faIconMap = {
    discord: faDiscord,
    discourse: faDiscourse,
    facebook: faFacebook,
    forum: faComments,
    github: faGithub,
    gitlab: faGitlab,
    group: faUsers,
    irc: faKeyboard,
    linkedin: faLinkedin,
    mailinglist: faAt,
    matrix: faComments,
    meetup: faMeetup,
    reddit: faReddit,
    slack: faSlack,
    telegram: faTelegram,
    twitter: faTwitter,
    url: faLink,
    youtube: faYoutube
  };

  const START = '🏗   ' + chalk.yellow('Building icons...');
  const END = '👍  ' + chalk.green('icons built');

  console.log('');
  console.log(START);
  console.time(END);

  for (let key in faIconMap) {
    const val = faIconMap[key];
    const file = `dist/img/${key}.svg`;
    console.log(chalk.yellow(file));
    fs.writeFileSync(file, fontawesome.icon(val).html);
  }

  console.timeEnd(END);
}
