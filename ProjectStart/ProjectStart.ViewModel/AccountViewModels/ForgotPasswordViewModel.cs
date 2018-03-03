using System.ComponentModel.DataAnnotations;

namespace ProjectStart.ViewModel.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
