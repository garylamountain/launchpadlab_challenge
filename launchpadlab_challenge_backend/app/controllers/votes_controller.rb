class VotesController < ApplicationController

    def index
        votes = Vote.all
        render json: votes.to_json
    end

    def create 
        vote = Vote.create({email: params[:email], framework: params[:framework]})
        framework = Framework.find_by(name: params[:framework])
        framework.update(votes: framework.votes + 1)
        render json: Framework.all.to_json
    end

end
