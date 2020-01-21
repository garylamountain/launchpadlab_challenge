# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Framework.create({name: 'React', votes: 0})
Framework.create({name: 'Angular', votes: 0})
Framework.create({name: 'Ember', votes: 0})
Framework.create({name: 'Vue', votes: 0})

Vote.create({email: 'gjl@gmail.com', framework: 'React'})
Vote.create({email: 'g1jl@gmail.com', framework: 'React'})
Vote.create({email: 'g2jl@gmail.com', framework: 'React'})
Vote.create({email: 'g5jl@gmail.com', framework: 'Angular'})
Vote.create({email: 'grrrjl@gmail.com', framework: 'Angular'})
Vote.create({email: 'gffffjl@gmail.com', framework: 'Ember'})