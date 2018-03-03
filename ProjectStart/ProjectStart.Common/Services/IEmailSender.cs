using System.Threading.Tasks;

namespace ProjectStart.WebApp.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
