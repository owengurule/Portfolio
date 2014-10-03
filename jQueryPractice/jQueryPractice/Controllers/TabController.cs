using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace jQueryPractice.Controllers
{
    public class TabController : Controller
    {
        //
        // GET: /Tab/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Tab1()
        {
            return PartialView();
        }

        public ActionResult Tab2()
        {
            return PartialView();
        }

        public ActionResult Tab3()
        {
            return PartialView();
        }
    }
}
