import { UserService } from './user.service.js';

export const signup = async (req, res) => {
  try {
    const { name, password } = req.body;
    let accountNumber = Math.floor(Math.random() * 99999999);

    const user = await UserService.create({
      name,
      password,
      accountNumber,
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal serrver error',
      error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { accountNumber, password } = req.body;

    const user = await UserService.login({ accountNumber, password });

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: 'User not found',
      });
    }

    return res.status(200).json({
      message: 'You are logged',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal serrver error',
      error,
    });
  }
};

export const getHistory = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal serrver error',
      error,
    });
  }
};
