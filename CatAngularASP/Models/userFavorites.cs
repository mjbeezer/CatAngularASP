using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CatAngularASP.Models
{
    public class userFavorites
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Id")]
        public string UserID { get; set; }
        public string CatID { get; set; }
    }
}
