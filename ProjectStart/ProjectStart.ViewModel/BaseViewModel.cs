using Newtonsoft.Json;
using ProjectStart.Entity.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectStart.ViewModel
{
    public class BaseViewModel<T> where T: IPageContent
    {
        public BaseViewModel(T currentPage)
        {
            CurrentPage = CurrentPage;
            SetBaseMetaData(currentPage);
        }
        public T CurrentPage { get; set; }
        public IDictionary<string, string> MetaTags { get; set; } = new Dictionary<string, string>();


        public void SetBaseMetaData(IPageContent metaTags)
        {
            MetaTags.Add("title", metaTags.Title);
            MetaTags.Add("description", metaTags.Description);
            MetaTags.Add("keyword", metaTags.Keywords);
        }
    }
}
