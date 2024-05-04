import nodemailer from 'nodemailer';
import showdown from 'devextreme-showdown';
import { runChat } from '../utils/AiResponce.js';

export const emailController = async (useremail, sunsign) => {
  if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_APP_PASSWORD) {
    return { message: 'Missing email or password credentials' };
  }
  try {

    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });

    let converter = new showdown.Converter()

    const response = converter.makeHtml(await runChat(sunsign))
    const mailConfig = {
      from: process.env.EMAIL_ADDRESS,
      to: useremail,
      subject: "Today's Horoscope",
      html: response
    }
    transport.sendMail(mailConfig, (error) => {
      if (error) {
        console.log("message: An error has Occured", error)
      } else {
        console.log("Email Send Successfully")
      }
    })
  } catch (error) {
    console.log(error)
    console.log("Email Failed")
  }
}