import subprocess

# 定义要执行的git命令，例如查看当前的git状态
command = ["git", "status"]

# 运行命令并获取输出
process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
output, error = process.communicate()

# 打印输出
if process.returncode == 0:
    print("Git Command Output:\n", output.decode())
else:
    print("Error:\n", error.decode())
