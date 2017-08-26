using System.ComponentModel.DataAnnotations;

namespace ProjectStart.WebApp.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
