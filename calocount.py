from flask import Flask, render_template, request, redirect
import requests
import json

app = Flask(__name__)

bmr = 0
tdee = 0
user = 0

@app.route("/", methods=["GET", "POST"])
def index():
    global bmr
    global tdee
    global user

    if request.method == "POST":
        name = request.form.get("fname")
        age = request.form.get("fage")
        sex = request.form.get("fsex")
        height = request.form.get("fheight")
        weight = request.form.get("fweight")
        activity = request.form.get("factivity")

        if sex == "Male":
            bmr = (10 * int(weight)) + (int(6.25) * int(height)) - (5 * int(age)) + 5
        else:
            bmr = (10 * int(weight)) + (int(6.25) * int(height)) - (5 * int(age)) - 161
        
        bmr = round(bmr)
        tdee = bmr*1.2
        user = str(name)

        return redirect("/journal")
    return render_template("index.html")

@app.route('/journal')
def journal():
    #index()

    return render_template("journal.html", rate=bmr, kcal=tdee, person=user)

@app.route('/info')
def info():

    return render_template("info.html")

if __name__ == "__main__":
    app.run(debug=True)
