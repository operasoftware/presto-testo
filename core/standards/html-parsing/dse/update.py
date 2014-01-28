import sys
import subprocess
try:
    import json
except ImportError:
    import simplejson as json

import killableprocess

class GitError(Exception):
    pass

def git(command, *args):
    command_line = ["git", command] + list(args)
    sys.stderr.write("Running command %s\n"%" ".join(command_line))
    proc = killableprocess.Popen(command_line, stdout=subprocess.PIPE,
                                 stderr=subprocess.PIPE)
    return proc

def modified(filename):
    p = git("status", "--porcelain", filename)

    stdout, stderr = p.communicate()
    if p.returncode != 0:
        sys.stderr.write(stdout + "\n")
        sys.stderr.write(stderr)
        raise GitError("Status failed")
    return stdout != ""
        

def commit(filename):
    p = git("add", filename)

    stdout, stderr = p.communicate()
    if p.returncode != 0:
        sys.stderr.write(stdout + "\n")
        sys.stderr.write(stderr)
        raise GitError("Add failed")
    p = git("commit", "-m", "Update results in " + filename)

    stdout,stderr = p.communicate()
    if p.returncode != 0:
        sys.stderr.write(stdout + "\n")
        sys.stderr.write(stderr)
        raise GitError("Commit failed")

def pull(repos=None, branch=None):
    args = []
    if repos is not None:
        args = [repos, branch]
    
    p = git("pull", *args)
    stdout, stderr = p.communicate()
    if p.returncode != 0:
        sys.stderr.write(stdout + "\n")
        sys.stderr.write(stderr)
        raise GitError("Pull failed")

def push(repos=None, branch=None):
    args = []
    if repos is not None:
        args = [repos, branch]
    
    p = git("push", *args)
    stdout, stderr = p.communicate()
    if p.returncode != 0:
        sys.stderr.write(stdout + "\n")
        sys.stderr.write(stderr)
        raise GitError("Pull failed")

def main():
    filename = sys.argv[1]
    if len(sys.argv) > 2:
        repos = sys.argv[2]
        branch = sys.argv[3]
    else:
        repos = None
        branch = None

    if modified(filename):
        commit(filename)
        pull(repos, branch)
        push(repos, branch)
    else:
        sys.stderr.write("Nothing to do")

if __name__ == "__main__":
    main()
