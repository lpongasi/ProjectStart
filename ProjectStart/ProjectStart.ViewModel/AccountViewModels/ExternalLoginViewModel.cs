using System.ComponentModel.DataAnnotations;

namespace ProjectStart.ViewModel.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
