'use strict';

const Config = require('config');
const EmailTemplate = require('email-templates').EmailTemplate;
const Path = require('path');
const Promise = require('bluebird');

const Http = require('./http');

const merge = (templateName, context, callback) => {

  const template = Path.join(__dirname, '../../templates', templateName);
  const emailTemplate = new EmailTemplate(template);

  const render = Promise.promisify(emailTemplate.render, { context: emailTemplate });

  return render(context);
};

const templates = {

  register: (data) => {

    return merge('register', data);
  }
};

const payload = (toAddress, subject, text, html) => ({
  FromEmail: Config.get('email.fromAddress'),
  FromName: Config.get('email.fromName'),
  To: toAddress,
  CC: Config.get('email.ccAddress'),
  Subject: subject,
  'Text-part': text,
  'Html-part': html
});

const send = (toAddress, templateName, data) => {

  return templates[templateName](data).then((message) => {

    const body = payload(toAddress, message.subject.replace('\n', ''), message.text, message.html);
    const post = Promise.promisify(Http.post);
    return post('/send', body);
  });
};

module.exports = { send };
