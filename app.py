from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'supersecretkey'  

def save_chart_type(chart_type):
    session['chart_type'] = chart_type


@app.route('/select_chart', methods=['POST'])
def select_chart():
    chart_type = request.form.get('chart_type')
    if chart_type not in ['bar', 'line', 'pie','radar','doughnut']:
        return redirect(url_for('home')) 
    save_chart_type(chart_type)
    return redirect(url_for('chart'))

@app.route('/')
def home():
    chart_types = ['bar', 'line', 'pie','radar','doughnut'] 
    chart_type = session.get('chart_type', '')
    return render_template('index.html', chart_types=chart_types, chart_type=chart_type)

@app.route('/chart')
def chart():
    chart_type = session.get('chart_type', '')
    if not chart_type:
        return render_template('chart.html', message="Please select chart type from home page")
    return render_template('chart.html', chart_type=chart_type)

if __name__ == '__main__':
    app.run(debug=True)
