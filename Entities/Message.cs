using System;

namespace Chat.Entities
{
    public class Message
    {
        public int Id { get; set; }
        public string Nickname { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
    }
}
