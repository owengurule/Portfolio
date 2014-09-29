using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;

namespace Portfolio.Controllers
{
    public class ContactController : Controller
    {
        //
        // GET: /Contact/
        [HttpGet]
        public ActionResult Contact()
        {
            return View(new Models.Contact_Information());
        }

        //[HttpPost]
        //public ActionResult Contact(Models.Contact_Information contactForm)
        //{
        //    Models.ContactEntities db = new Models.ContactEntities();
        //    db.Contact_Information.Add(contactForm);

        //    db.SaveChanges();

        //    return RedirectToAction("ThankYou", "Contact");
        //}


        //new contact form post to send me an email with the info
        [HttpPost]
        public ActionResult Contact(Models.Contact_Information contactForm)
        {
            //send an email
            // step 1 add using System.Net.Mail
            //step 2 create a new message
            //first perameter= who its from second= who its to.
            MailMessage message = new MailMessage("notowengurule@gmail.com", "owengurule@gmail.com");

            //step 3 set the subject
            message.Subject = ("Contact Request from");
            //step 4 construct the body with a stringbuilder
            System.Text.StringBuilder sb = new System.Text.StringBuilder();

            sb.AppendLine("You have a new contact request.");
            sb.AppendLine("First " + contactForm.First);
            sb.AppendLine("Last " + contactForm.Last);
            sb.AppendLine("Email: " +contactForm.email);
            sb.AppendLine("Phone: " +contactForm.phone);
            sb.AppendLine("Comment: " +contactForm.comment);
            //add the body to the message
            message.Body = sb.ToString();

            //step 6. declare the SMTP client
            //aka the mail server
            SmtpClient smtpClient = new SmtpClient("mail.dustinkraft.com", 587);
            smtpClient.Credentials = new System.Net.NetworkCredential("postmaster@dustinkraft.com", "techIsFun1");

            //step 7. Send the message
            smtpClient.Send(message);

            //done
            //kick the user to the thankyou page
            return RedirectToAction("ThankYou", "Contact");
        }

        public ActionResult ThankYou()
        {
            return View();
        }
    }
}
