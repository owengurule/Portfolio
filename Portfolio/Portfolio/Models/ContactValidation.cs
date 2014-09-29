using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//import system.componentmodel.data annotations
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Models
{
    public partial class Contact
    {

    }


    public class ContactValidation
    {
        [Required]
        [MaxLength(200)]
        public string First { get; set; }

        [Required]
        [MaxLength(200)]
        public string Last { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(200)]
        public string email { get; set; }

        [Required]
        [MaxLength(200)]
        public string phone { get; set; }

        [Required]
        [MaxLength(2000)]
        public string comment { get; set; }


    }
}