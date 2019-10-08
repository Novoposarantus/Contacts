using System.Web.Http;
using API.App_Start;

namespace API
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            ContainerConfig.Config();
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
