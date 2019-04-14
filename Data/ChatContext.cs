using Chat.Entities;
using Microsoft.EntityFrameworkCore;

namespace Chat.Data
{
    public class ChatContext : DbContext
    {
        public ChatContext(DbContextOptions<ChatContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Message> Messages { get; set; }
    }
}
