using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace jQueryPractice.Controllers
{
    public class AjaxGETController : Controller
    {
        //
        // GET: /AjaxGET/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Cats()
        {
            
            //you only want to return a partial view with an AJAX GET request
            return PartialView();
        }

        public ActionResult Dogs()
        {
            return Content("<strong>Dogs</strong> are not better than cats they smell, and you have to pick up their poo.");
        }

    }
}
