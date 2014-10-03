using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
// 1.
using System.ComponentModel.DataAnnotations;

namespace jQueryPractice.Models
{
    public class ContactForm
    {
        //2
        [Required(ErrorMessage="Enter your name"), Display(Name="Your Name")]
        public string Name { get; set; }
        //3
        [Required, EmailAddress]
        public string Email { get; set; }
        //4
        [Required, DataType(DataType.MultilineText)]
        public string Message { get; set; }

    }
}