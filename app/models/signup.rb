class Signup < ActiveRecord::Base

  scope :recent, proc { |num| order("created_at desc").limit(num) }

end
