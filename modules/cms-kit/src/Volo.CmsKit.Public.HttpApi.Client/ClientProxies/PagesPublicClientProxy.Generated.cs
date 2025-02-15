// This file is automatically generated by ABP framework to use MVC Controllers from CSharp
using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Http.Client;
using Volo.Abp.Http.Modeling;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Http.Client.ClientProxying;
using Volo.CmsKit.Public.Pages;

// ReSharper disable once CheckNamespace
namespace Volo.CmsKit.Public.Pages.ClientProxies
{
    [Dependency(ReplaceServices = true)]
    [ExposeServices(typeof(IPagePublicAppService), typeof(PagesPublicClientProxy))]
    public partial class PagesPublicClientProxy : ClientProxyBase<IPagePublicAppService>, IPagePublicAppService
    {
        public virtual async Task<PageDto> FindBySlugAsync(string slug)
        {
            return await RequestAsync<PageDto>(nameof(FindBySlugAsync), new ClientProxyRequestTypeValue
            {
                { typeof(string), slug }
            });
        }
    }
}
