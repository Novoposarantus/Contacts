using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using API.Infrastructure;
using Domain.Abstract;
using Domain.Repository;
using Unity;

namespace API.App_Start
{
    public static class ContainerConfig
    {
        public static void Config()
        {
            var container = new UnityContainer();
            MapTypes(container);
            var httpControllerActivator = new UnityHttpControllerActivator(container);
            GlobalConfiguration.Configuration.Services.Replace(typeof(IHttpControllerActivator),
                httpControllerActivator);
        }

        private static void MapTypes(IUnityContainer container)
        {
            container.RegisterType(typeof(IContactRepository), typeof(ContactRepository));
        }
    }
}