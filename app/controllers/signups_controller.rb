class SignupsController < InheritedResources::Base

  def create
    create! { thanks_path }
  end

end
