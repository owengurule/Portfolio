using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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

        [HttpPost]
        public ActionResult Contact(Models.Contact_Information contactForm)
        {
            Models.Contact_Information db = new Models.Contact_Information();

            db.Contact_Information.Add(contactForm);

            db.SaveChanges();

            return RedirectToAction("ThankYou", "Contact");
        }

        public ActionResult ThankYou()
        {
            return View();
        }
    }
}
