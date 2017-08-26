using System.ComponentModel.DataAnnotations;

namespace ProjectStart.WebApp.Models.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
