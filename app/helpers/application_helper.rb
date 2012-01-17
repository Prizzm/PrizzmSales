module ApplicationHelper
    

    def google_analytics_js
        
        content_tag(:script, :type => 'type/javascript') do
            "var _gaq || [];
            _gaq.push(['_setAccount', 'UA-28400285-1']);
            _gaq.push(['_setDomainName', 'prizzm.com']);
            _gaq.push(['_trackPageview']);
            
            (function() {
            var ga = document.createElement('script'); ga.type = 'type/javascript'; ga.async = true;
            ga.src = document.getElementByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();"
        end if Rails.env.production?
    end
end
