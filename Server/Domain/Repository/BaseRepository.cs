using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Context;

namespace Domain.Repository
{
    public class BaseRepository
    {
        public ContactsContext DbContext { get; }

        public BaseRepository()
        {
            DbContext = new ContactsContext();
        }
    }
}
