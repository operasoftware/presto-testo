/*****
*
*	Scheduler.js
*	copyright 2000, 2001, Kevin Lindsey
*
*****/

/*****
*
*	Globals and Constants
*
*****/
var scheduler = new Scheduler();
Scheduler.INTERVAL = 30;


/*****
*
*	Scheduler constructor
*
*****/
function Scheduler() {
	this.timeoutID = null;
    this.running   = 0;
	this.tasks     = new Array();
}


/*****
*
*	process
*
*****/
Scheduler.process = function() {
	for (var i = 0; i < scheduler.tasks.length; i++) {
		scheduler.tasks[i].decrement();
	}

    if ( scheduler.running ) {
        scheduler.timeoutID = window.setTimeout("Scheduler.process()", Scheduler.INTERVAL);
    }
};


/*****
*
*	add_task
*
*****/
Scheduler.prototype.add_task = function(task, tick_count) {
	this.tasks[this.tasks.length] = new Task(task, tick_count);
};


/*****
*
*	delete_task
*
*****/
Scheduler.prototype.delete_task = function(task) {
	var last = this.tasks.length - 1;

	for (var i = 0; i <= last; i++) {
		if (this.tasks[i].task == task) {
			for (var j = i; j < last; j++) {
				this.tasks[j] = this.tasks[j+1];
			}
			this.tasks.length = last;
			break;
		}
	}
};


/*****
*
*	start
*
*****/
Scheduler.prototype.start = function() {
	if (this.timeoutID == null) {
		this.last_time = new Date();
        this.running   = true;
		this.timeoutID = window.setTimeout("Scheduler.process()", Scheduler.INTERVAL);
	}
};


/*****
*
*	stop
*
*****/
Scheduler.prototype.stop = function() {
	if (this.timeoutID != null) {
		this.timeoutID = null;
        this.running   = false;
		window.clearTimeout(this.timeoutID);
	}
};


/*****
*
*	pause_resume
*
*****/
Scheduler.prototype.pause_resume = function() {
	if (this.timeoutID) {
		this.stop();
	} else {
		this.start();
	}
};


/*****	Task Class	*****/

/*****
*
*	Task
*
*****/
function Task(task, tick_count) {
	this.task         = task;
	this.tick_count   = tick_count;
	this.current_tick = tick_count;
}


/*****
*
*	decrement
*
*****/
Task.prototype.decrement = function() {
	this.current_tick--;
	if (this.current_tick <= 0) {
		this.task();
		this.current_tick = this.tick_count;
	}
};
