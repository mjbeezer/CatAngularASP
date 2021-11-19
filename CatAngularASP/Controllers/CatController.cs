using CatAngularASP.Data;
using CatAngularASP.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CatAngularASP.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CatController : ControllerBase
    {
        public ApplicationDbContext context;

        public CatController(ApplicationDbContext _context)
        {
            context = _context;
        }

        [HttpPost("addUserFavorite")]
        public userFavorites addUserFavorite(string cat_Id)
        {
            //grabbing current logged in user
            string s = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            userFavorites newUserFavorite = new userFavorites()
            {
                UserID = s,
                CatID = cat_Id
            };

            context.User_Favorites.Add(newUserFavorite);
            context.SaveChanges();
            return newUserFavorite;
        }

        [HttpGet("allUserFavorites")]
        public List<userFavorites> allUserFavorites()
        {
            //grabbing current logged in user
            string s = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            //pull users favorites
            return context.User_Favorites.Where(U => U.UserID == s).ToList();
        }
    }
}
