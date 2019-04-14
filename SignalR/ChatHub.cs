using Chat.Data;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Chat
{
    public class ChatHub : Hub
    {
        private readonly ChatContext _context;

        public ChatHub(ChatContext context)
        {
            _context = context;
        }

        public override async Task OnConnectedAsync()
        {
            var top10msgs = _context.Messages
                .OrderBy(x => x.Date);
               
            await Clients.Caller.SendAsync("OnConnected", top10msgs);
            await base.OnConnectedAsync();
        }


        public async Task SendMessage(string nickname, string message, DateTime date)
        {
            await _context.Messages.AddAsync(new Entities.Message { Nickname = nickname, Text = message, Date = date });
            await _context.SaveChangesAsync();
            await Clients.All.SendAsync("ReceiveMessage", nickname, message, date);
        }
    }
}
