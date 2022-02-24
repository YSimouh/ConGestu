using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ConGestu.Models;

namespace ConGestu.Data{
    public class NotesDbContext: DbContext{
        public NotesDbContext(DbContextOptions<NotesDbContext> options):base(options){ }
        public DbSet<Note> Notes {get;set;}
    }
}