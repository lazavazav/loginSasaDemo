export default {
  name: 'App',
  data() {
    return {
      tasks: [],
      newTaskInput: '',
      isLoggedIn: false,
      token: '',
    };
  },
  async created() {
    const self = this;
    // eslint-disable-next-line no-undef
    netlifyIdentity.on('init', async (user) => {
      if (user) {
        self.token = user.token.access_token;
        await self.listTasks();
        self.isLoggedIn = true;
      }
    });

    // eslint-disable-next-line no-undef
    netlifyIdentity.on('login', async (user) => {
      self.token = user.token.access_token;
      await self.listTasks();
      self.isLoggedIn = true;
    });

    // eslint-disable-next-line no-undef
    netlifyIdentity.on('logout', () => {
      self.isLoggedIn = false;
      self.newTaskInput = '';
      self.tasks = [];
      self.token = '';
    });
  },
  methods: {
    async listTasks() {
      let response = await fetch('/.netlify/functions/listtasks', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.tasks = await response.json();
    },

    async addTask() {
      let response = await fetch('/.netlify/functions/addtask', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          name: this.newTaskInput,
        }),
      });

      let newTask = await response.json();
      this.tasks.push(newTask);
      this.newTaskInput = '';
    },

    async removeTask(taskId) {
      await fetch('/.netlify/functions/deletetask', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          id: taskId,
        }),
      });
      this.tasks = this.tasks.filter((t) => t.id !== taskId);
    },
  },
};
