class FrameworksController < ApplicationController

    def index
        frameworks = Framework.all
        render json: frameworks.to_json
    end

end
